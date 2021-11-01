package modules

import (
	"goapp/modules/article"
	"goapp/modules/home"

	"github.com/gin-gonic/gin"
)

func Setup(app *gin.Engine) {

	app.Use(func(c *gin.Context) {
		c.Next()
	})

	home.Setup(app)
	article.Setup(app)
}
