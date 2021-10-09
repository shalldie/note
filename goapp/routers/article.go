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

			person := models.Person{}
			err := c.BindJSON(&person)

			if err != nil {
				return
			}

			c.JSON(200, gin.H{
				"messsage": "objk",
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
