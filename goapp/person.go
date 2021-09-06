package main

type Person struct {
	name string
	age  int
}

func (p Person) sayHello() {
	println(p.name, p.age)
}
