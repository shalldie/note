package article

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func loadRoute(app *gin.Engine) {

	route := app.Group("/article")
	{
		route.Any("/:name", func(c *gin.Context) {

			// article := Article{}
			var article Article
			err := c.BindJSON(&article)

			if err != nil {
				return
			}

			c.JSON(200, gin.H{
				"messsage": "objk",
				"article":  article,
			})
		})

		route.GET("/article", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"message": "ojbk2",
			})
		})
	}

}
