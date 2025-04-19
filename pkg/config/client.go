package config

import (
	"github.com/anthropics/anthropic-sdk-go"
)

func NewClient() anthropic.Client {
	return anthropic.NewClient()
}
