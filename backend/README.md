# Backend Project

This is a backend project that demonstrates a simple Java servlet application.

## Project Structure

```
backend
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── example
│   │   │           └── servlet
│   │   │               └── HelloWorldServlet.java
│   │   └── resources
│   │       └── application.properties
├── .vscode
│   └── settings.json
├── pom.xml
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd backend
   ```

3. Build the project using Maven:
   ```
   mvn clean install
   ```

4. Run the application:
   ```
   mvn spring-boot:run
   ```

## Usage

Once the application is running, you can access the servlet at:
```
http://localhost:8080/hello
```

This will trigger the `HelloWorldServlet` and return a greeting message.

## Configuration

Configuration properties can be found in `src/main/resources/application.properties`. Adjust the settings as needed for your environment.