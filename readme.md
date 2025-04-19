# Code Editing Agent

A Go-based application that provides an interactive agent for code editing and file manipulation.

## Project Structure

The project is organized into the following main components:

### Main Application (`main.go`)

The entry point of the application that:

- Initializes the configuration client
- Sets up user input handling
- Configures and runs the agent with available tools

### Package Structure

#### `pkg/agent`

Contains the core agent implementation that:

- Manages the interaction between the user and available tools
- Handles the execution flow of the application
- Processes user input and tool responses

#### `pkg/tools`

Implements various file manipulation tools including:

- File reading capabilities
- Directory listing functionality
- File editing operations

#### `pkg/config`

Handles configuration management:

- Client initialization
- Environment setup
- Configuration parameters

## Dependencies

The project uses Go modules for dependency management:

- `go.mod`: Defines the project's module and dependencies
- `go.sum`: Contains the expected cryptographic checksums of the content of specific module versions

## Environment Configuration

The project uses a `.env` file for environment-specific configuration. Make sure to set up the required environment variables before running the application.

## Getting Started

1. Ensure you have Go installed on your system
2. Clone the repository
3. Install dependencies:
   ```bash
   go mod download
   ```
4. Run the application:
   ```bash
   go run main.go
   ```

## Features

- Interactive command-line interface
- File system operations
- Code editing capabilities
- Configurable tool set
- Environment-based configuration

## License

MIT
