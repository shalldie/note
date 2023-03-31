package main

import (
	"fmt"
	"os"
	"tnote/gist"
)

func main() {
	token := os.Getenv("TNOTE_GIST_TOKEN")

	if token == "" {
		fmt.Println("Can't find $TNOTE_GIST_TOKEN in $PATH")
		os.Exit(1)
	}

	gh := gist.NewGist(token)
	gh.Setup()
}
