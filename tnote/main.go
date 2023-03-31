package main

import (
	"tnote/gist"
)

const TOKEN = "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"

func main() {
	gh := gist.NewGist(TOKEN)
	gh.Setup()
}
