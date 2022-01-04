package utils

import (
	"github.com/caarlos0/env/v6"
	"github.com/joho/godotenv"
)

type EnvConfig struct {
	PORT string `env:"PORT" envDefault:""`
}

func ParseEnv() *EnvConfig {
	godotenv.Load()

	envConfig := EnvConfig{}

	if err := env.Parse(&envConfig, env.Options{RequiredIfNoDef: true}); err != nil {
		panic(err)
	}

	return &envConfig
}
