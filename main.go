package main

import (
	"bufio"
	"context"
	"fmt"
	"os"

	"code-editing-agent/pkg/agent"
	"code-editing-agent/pkg/config"
	"code-editing-agent/pkg/tools"
)

func main() {
	client := config.NewClient()

	scanner := bufio.NewScanner(os.Stdin)
	getUserMessage := func() (string, bool) {
		if !scanner.Scan() {
			return "", false
		}
		return scanner.Text(), true
	}

	tools := []agent.ToolDefinition{tools.ReadFileDefinition, tools.ListFilesDefinition, tools.EditFileDefinition}
	agent := agent.NewAgent(client, getUserMessage, tools)
	if err := agent.Run(context.Background()); err != nil {
		fmt.Printf("Error: %s\n", err.Error())
		os.Exit(1)
	}
}
