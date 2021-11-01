package utils

import (
	"os/exec"
	"runtime"
)

var commands = map[string]string{
	"windows": "start",
	"darwin":  "open",
	// "linux":   "xdg-open",
}

func Open(url string) {
	run, ok := commands[runtime.GOOS]

	println(runtime.GOOS, run)
	if !ok {
		return
	}

	exec.Command(run, url).Output()
}
