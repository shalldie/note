package home

import (
	"github.com/gin-gonic/gin"
)

func Setup(app *gin.Engine) {
	loadRoute(app)
}
