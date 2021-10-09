package main

import (
	"goapp/routers"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	app := gin.Default()

	routers.Setup(app)

	app.Run(":8081")

	http.Get("https://www.baidu.com")
}
