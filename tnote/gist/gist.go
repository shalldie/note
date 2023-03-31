package gist

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strconv"

	"github.com/shalldie/tnote/utils"
)

type Gist struct {
	TOKEN   string
	Model   *GistModel
	Content string
}

func NewGist(token string) *Gist {
	return &Gist{
		TOKEN: token,
	}
}

func (g *Gist) Setup() {
	// 1. 找到 gist
	list := g.FetchGists(1, 100)

	item, err := utils.Find(list, func(item *GistModel, i int) bool {
		return item.Description == SPECIAL_DESCRIPTION
	})
	// 2. 第一页没找到，再去第二页找
	if err != nil {
		list = g.FetchGists(2, 100)

		item, err = utils.Find(list, func(item *GistModel, i int) bool {
			return item.Description == SPECIAL_DESCRIPTION
		})
	}

	// 3. 如果没找到，去创建 gist
	if err != nil {
		g.Model = g.createGist()
	} else {
		g.Model = item
	}
	// fmt.Println(g.Model)
}

func (g *Gist) getHeaders() map[string]string {
	return map[string]string{
		"Accept":               "application/vnd.github+json",
		"Authorization":        fmt.Sprintf("bearer %v", g.TOKEN),
		"X-GitHub-Api-Version": "2022-11-28",
	}
}

func (g *Gist) Query(content string) string {

	client := &http.Client{}

	paramsObj := make(map[string]string)
	paramsObj["query"] = content
	paramsBytes, _ := json.Marshal(paramsObj)

	req, _ := http.NewRequest("POST", "https://api.github.com/graphql", bytes.NewReader(paramsBytes))
	req.Header.Add("Authorization", fmt.Sprintf("bearer %v", g.TOKEN))

	res, _ := client.Do(req)
	body, _ := io.ReadAll(res.Body)

	return string(body)
}

// 获取 gists 列表
func (g *Gist) FetchGists(page int, perPage int) []*GistModel {

	body := fetch("https://api.github.com/gists", &FetchOptions{
		Method: "GET",
		Query: map[string]string{
			"page":     strconv.Itoa(page),
			"per_page": strconv.Itoa(perPage),
		},
		Headers: g.getHeaders(),
	})

	var gistList []*GistModel
	err := json.Unmarshal(body, &gistList)

	if err != nil {
		panic(err)
	}

	// fmt.Println(string(body))

	return gistList
}

// 获取文件内容
func (g *Gist) FetchFile(fileName string) string {
	fileUrl := g.Model.Files[fileName].RawUrl

	body := fetch(fileUrl, &FetchOptions{
		Method:  "GET",
		Headers: g.getHeaders(),
	})

	return string(body)
}

func (g *Gist) createGist() *GistModel {
	body := fetch("https://api.github.com/gists", &FetchOptions{
		Method: "POST",
		Params: utils.H{
			"title":       SPECIAL_DESCRIPTION,
			"description": SPECIAL_DESCRIPTION,
			"files": utils.H{
				"newfile.md": utils.H{
					"content": "welcome to use tnote >_<#@!",
				},
			},
			"public": false,
		},
		Headers: g.getHeaders(),
	})

	var model *GistModel

	err := json.Unmarshal(body, model)

	if err != nil {
		panic(err)
	}

	return model
}

// func (g *Gist) getGist(id string) *GistModel {
// 	body := fetch("https://api.github.com/gists/"+id, &FetchOptions{
// 		Method:  "GET",
// 		Headers: g.getHeaders(),
// 	})

// 	var model *GistModel
// 	err := json.Unmarshal(body, model)

// 	if err != nil {
// 		panic(err)
// 	}

// 	return model
// }