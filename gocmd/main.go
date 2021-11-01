package main

import "encoding/json"

type IAnimal interface {
	Eat()
}

type Dog struct {
	Name string
}

func (dog *Dog) Eat() {
	println("make dog eat " + dog.Name)
}

func main() {

	// animals := []IAnimal{&Dog{Name: "a dog"}}

	// for _, item := range animals {
	// 	item.Eat()
	// }

	// person := Person{
	// 	Name: "tom",
	// }

	// person.UpdateName("lily")

	// println(person.Name)

	content := `{"name":"tom233"}`

	var person Person

	json.Unmarshal([]byte(content), &person)

	println(person.Name)

}

func PrintAll(vals []interface{}) {
	for _, val := range vals {
		println(val)
	}
}

type Person struct {
	Name string `json:"name"`
}

func (person *Person) UpdateName(name string) {
	person.Name = name
}
