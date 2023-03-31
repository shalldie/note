package utils

import "errors"

func FindIndex[T comparable](list []T, predicate func(T, int) bool) int {
	for index, cur := range list {
		if predicate(cur, index) {
			return index
		}
	}

	return -1
}

func Find[T comparable](list []T, predicate func(T, int) bool) (item T, err error) {
	index := FindIndex(list, predicate)

	if index >= 0 {
		return list[index], nil
	}

	return item, errors.New("not found")
}

type H map[string]any
