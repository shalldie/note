package routers

import (
	"goapp/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func loadArticle(app *gin.Engine) {

	route := app.Group("/article")
	{
		route.Any("/:name", func(c *gin.Context) {
			name, _ := c.Params.Get("name")

			person := models.Person{}
			err := c.ShouldBindJSON(&person)

			if err != nil {
				println("sth err")
				c.JSON(500, err)
			}

			println(person.Name, person.Age)

			c.JSON(200, gin.H{
				"messsage": "objk",
				"name":     name,
				"person":   person,
			})
		})

		route.GET("/article", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"message": "ojbk2",
			})
		})
	}

}
