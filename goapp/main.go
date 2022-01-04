package main

import (
	"fmt"
	"goapp/modules"
	"goapp/utils"
	"regexp"

	"github.com/gin-gonic/gin"
)

func main() {

	config := utils.ParseEnv()

	utils.Open(fmt.Sprintf("http://127.0.0.1:%s", config.PORT))

	app := gin.Default()

	modules.Setup(app)

	app.Run(":" + config.PORT)
}

func main2() {
	// person := models.Person{
	// 	Name: "tom",
	// 	Age:  233,
	// }

	// buffer, _ := json.Marshal(person)

	// content := string(buffer)

	// b2 := []byte(content)

	// p2 := models.Person{}
	// json.Unmarshal(b2, &p2)

	// println(p2.Name, p2.Age)

	// map1 := make(map[string]string)

	// map1["helllo"] = "world"

	// bb, _ := json.Marshal(&map1)
	// println(string(bb))

	// obj := struct {
	// 	name string
	// }{}

	// person := models.Person{
	// 	Name: "",
	// 	Age:  1,
	// }

	// person := struct {
	// 	Name string `json:"name"`
	// 	Age  int    `json:"age"`
	// }{
	// 	// Name: "",
	// 	// Age:  1,
	// }

	// content := "{\"Name\":\"tom\",\"Age\":12}"

	// content := `{"name":"tom","age":12}`

	// json.Unmarshal([]byte(content), &person)

	// println(person.Name, person.Age)

	// regexp.Match(``, []byte(content))

	// content := "{\"Name\":\"tom\",\"Age\":12}"
	// reg := regexp.MustCompile(`"([^"]+?)"\s*:\s*"?([^",\}\s]+)`)

	// result := reg.FindAllStringSubmatch(content, -1)

	// for _, item := range result {
	// 	println(item[1], item[2])
	// }

	content := "{\"Name\":\"tom\",\"Age\":12}"
	reg := regexp.MustCompile(`"([^"]+?)":\s*"?([^",\}]+)"?`)

	result := reg.FindAllStringSubmatch(content, -1)

	for _, item := range result {
		println(item[1], item[2])
	}

}
