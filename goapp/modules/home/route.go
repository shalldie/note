package home

import (
	"goapp/models"

	"github.com/gin-gonic/gin"
)

func loadRoute(app *gin.Engine) {
	route := app.Group("/")
	{

		route.GET("/", func(c *gin.Context) {
			c.JSON(200, models.Person{
				Name: "tom",
				Age:  12,
			})
		})
	}
}
