package routers

import "github.com/gin-gonic/gin"

func Setup(e *gin.Engine) {
	e.Use(func(c *gin.Context) {

		// c.Writer.WriteString("lalala:")
		c.Next()

	})

	loadHome(e)
	loadArticle(e)
}
