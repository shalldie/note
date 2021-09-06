package main

type Person struct {
	Name string `json:"name"`
	Age  int    `json:"age"`
}

func (p Person) sayHello() {
	println(p.Name, p.Age)
}
