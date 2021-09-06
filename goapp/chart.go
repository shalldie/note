package main

import (
	"fmt"
	"strconv"
)

type Chart struct {
}

func (c Chart) Print() Chart {

	for x := 1; x < 10; x++ {

		for y := 1; y < 10; y++ {
			if y > x {
				continue
			}

			result := strconv.Itoa(x*y) + "  "
			result = result[0:2]

			temp := fmt.Sprintf("%d * %d = %s  ", y, x, result)
			print(temp)
		}

		println()
	}

	return c
}
