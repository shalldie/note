package main

import (
	"io/ioutil"
	"net/http"
)

// import (
// 	"io/ioutil"
// 	"net/http"
// )

// // import "fmt"

// // func If(condition bool,trueResult,falseResult)  {
// // 	if condition{
// // 		return trueResult
// // 	}

// // 	return falseResult
// // }

// // func balabala(condition bool,tr,fr)  {
// // 	if condition{
// // 		return tr
// // 	}

// // 	return fr
// // }

// type Person struct {
// 	name string `default:"default-a"`

// 	age int
// }

// func main() {

// 	person := new(Person)

// 	println(person.name, person.age)

// 	response, err := http.Get("https://nosaid.com")

// 	if err != nil {
// 		println(err)
// 		return
// 	}

// 	defer response.Body.Close()

// 	result, err := ioutil.ReadAll(response.Body)

// 	if err != nil {
// 		return
// 	}

// 	println(string(result))

// }

func main() {

	response, err := http.Get("https://nosaid.com")

	if err != nil {
		println(err)
	}

	defer response.Body.Close()

	result, err := ioutil.ReadAll(response.Body)

	if err != nil {
		println(err)
	}

	println(string(result))
}
