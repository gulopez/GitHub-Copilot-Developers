# Building a Spring Boot Application with GitHub Copilot

A step-by-step guide to create a complete Spring Boot application with MVC architecture, REST APIs, PostgreSQL database, and HTML/CSS frontend.

## Project Overview
We'll build a **Task Management System** with:
- **Backend**: Java + Spring Boot (MVC architecture)
- **Database**: PostgreSQL
- **Frontend**: Pure HTML + CSS
- **Features**: CRUD operations via REST APIs

---

## Phase 1: Project Setup

Create a local folder called TaskManager and open it using VSCode or any supported IDE.

### Step 1: Initialize Project Structure
```markdown
Create a Maven Spring Boot project structure with folders: src/main/java/com/example/taskmanager, src/main/resources, src/main/resources/static, src/main/resources/templates.
```

### Step 2: Create Maven Configuration
```markdown
Generate a pom.xml file for a Spring Boot 3.2 application with dependencies for Spring Web, Spring Data JPA, PostgreSQL driver, and Lombok.
```

### Step 3: Create Application Properties
```markdown
Create application.properties file with PostgreSQL database configuration for localhost:5432, database name "taskmanager", with JPA settings to auto-create tables and show SQL queries.
```

### Step 4: Create Main Application Class
```markdown
Generate a Spring Boot main application class named TaskManagerApplication with @SpringBootApplication annotation in the com.example.taskmanager package.
```

### Step 5: Create a controller

```markdown
Create a simple Home controller to handle the root path
```
---

## Phase 2: Database Layer (Model)

### Step 6: Create Task Entity
```markdown
Create a Task entity class in the model package with fields: id (Long, auto-generated), title (String, required), description (String), completed (boolean, default false), createdDate (LocalDateTime), and updatedDate (LocalDateTime). Use JPA annotations and Lombok.
```

### Step 7: Create User Entity (Optional)
```markdown
Generate a User entity in the model package with fields: id, username, email, and a one-to-many relationship with Task. Use JPA annotations.
```

---

## Phase 3: Repository Layer

### Step 8: Create Task Repository
```markdown
Create a TaskRepository interface in the repository package that extends JpaRepository for Task entity. Add custom query methods to find tasks by completion status and find all tasks ordered by creation date.
```

### Step 9: Create User Repository (Optional)
```markdown
Generate a UserRepository interface extending JpaRepository with a method to find users by email.
```

---

## Phase 4: Service Layer

### Step 10: Create Task Service Interface
```markdown
Create a TaskService interface in the service package with methods: getAllTasks(), getTaskById(Long id), createTask(Task task), updateTask(Long id, Task task), deleteTask(Long id), and toggleTaskCompletion(Long id).
```

### Step 11: Implement Task Service
```markdown
Generate TaskServiceImpl class that implements TaskService interface. Use @Service annotation, inject TaskRepository, and implement all CRUD operations with proper error handling for not found cases.
```

---

## Phase 5: Controller Layer (REST APIs)

### Step 12: Create REST API Controller
```markdown
Create a TaskController REST controller in the controller package with @RestController and @RequestMapping("/api/tasks"). Implement endpoints: GET /api/tasks (list all), GET /api/tasks/{id} (get by id), POST /api/tasks (create), PUT /api/tasks/{id} (update), DELETE /api/tasks/{id} (delete), and PATCH /api/tasks/{id}/toggle (toggle completion).
```

### Step 13: Add Global Exception Handler
```markdown
Create a GlobalExceptionHandler class with @ControllerAdvice to handle ResourceNotFoundException and return appropriate HTTP status codes with error messages in JSON format.
```

### Step 14: Create DTOs for Request/Response
```markdown
Generate TaskDTO and TaskCreateRequest classes in a dto package to separate API contracts from entity models. Include validation annotations like @NotBlank and @Size.
```

---

## Phase 6: Frontend (HTML + CSS)

### Step 15: Create Main HTML Page
```markdown
Create index.html in src/main/resources/static with a task management interface including: a form to add new tasks (title and description fields), a task list display area, buttons for mark complete/delete actions, and link to a stylesheet. Use semantic HTML5.
```

### Step 16: Create CSS Stylesheet
```markdown
Generate styles.css in src/main/resources/static/css with modern, clean styling for the task manager: card-based layout, primary colors, hover effects, responsive design for mobile devices, and styled buttons with appropriate colors for actions (green for complete, red for delete).
```

### Step 17: Create JavaScript for API Integration
```markdown
Create app.js in src/main/resources/static/js that uses Fetch API to: load all tasks on page load, submit new task form to POST /api/tasks, delete tasks with DELETE request, toggle task completion with PATCH request, and dynamically update the UI without page refresh.
```

### Step 18: Add Task Detail Page
```markdown
Create task-detail.html to display a single task with full details including creation date, update date, and an edit form. Add navigation back to the main page.
```

---

## Phase 7: Configuration & Security

### Step 19: Configure CORS
```markdown
Create a WebConfig class with @Configuration that implements WebMvcConfigurer to allow CORS for all origins during development. Configure allowed methods: GET, POST, PUT, DELETE, PATCH.
```

### Step 20: Add Input Validation
```markdown
Update TaskCreateRequest DTO with Bean Validation annotations: @NotBlank for title, @Size to limit description length, and add a ValidationExceptionHandler in the GlobalExceptionHandler.
```

### Step 21: Create Database Initialization Script
```markdown
Generate data.sql in src/main/resources with sample INSERT statements for 5 initial tasks to populate the database on startup.
```

---

## Phase 8: Advanced Features

### Step 22: Add Search Functionality
```markdown
Add a search endpoint GET /api/tasks/search?keyword={keyword} in TaskController that searches tasks by title or description. Update TaskRepository with a custom @Query annotation.
```

### Step 23: Implement Pagination
```markdown
Modify getAllTasks endpoint to support pagination using Spring Data Pageable. Update the method signature to accept page and size parameters and return Page<Task>.
```

### Step 24: Add Task Filtering
```markdown
Create a GET /api/tasks/filter endpoint with query parameters for completion status, date range, and sorting. Implement using JPA Specifications for dynamic queries.
```

### Step 25: Add Input Sanitization
```markdown
Create a utility class to sanitize user input for XSS prevention in task titles and descriptions before saving to database.
```

---

## Phase 9: Testing

### Step 26: Create Unit Tests for Service
```markdown
Generate TaskServiceImplTest class with JUnit 5 and Mockito. Write tests for all CRUD operations including edge cases like task not found scenarios.
```

### Step 27: Create Integration Tests for API
```markdown
Create TaskControllerIntegrationTest using @SpringBootTest and @AutoConfigureMockMvc. Test all REST endpoints with different scenarios including successful operations and error cases.
```

### Step 28: Create Repository Tests
```markdown
Generate TaskRepositoryTest using @DataJpaTest to test custom query methods with an in-memory H2 database.
```

---

## Phase 10: Documentation & Deployment

### Step 29: Add API Documentation
```markdown
Add Swagger/OpenAPI dependencies to pom.xml and create a SwaggerConfig class. Annotate REST endpoints with @Operation and @ApiResponse for automatic API documentation.
```

### Step 30: Create README Documentation
```markdown
Generate a comprehensive README.md with project description, prerequisites (Java 17, PostgreSQL, Maven), setup instructions, API endpoint documentation, and how to run the application.
```

### Step 31: Create Docker Configuration
```markdown
Create a Dockerfile for the Spring Boot application with multi-stage build and a docker-compose.yml that sets up both the application and PostgreSQL database with proper networking and environment variables.
```

### Step 32: Add Health Check Endpoint
```markdown
Add Spring Boot Actuator dependency and configure application.properties to expose health and info endpoints at /actuator/health.
```

---

## Running the Complete Application

### Step 33: Build and Run
```markdown
Create a run.sh script that starts PostgreSQL (if using Docker), builds the Maven project with mvn clean install, and runs the Spring Boot application with java -jar target/taskmanager.jar.
```

### Step 34: Test the Application
```markdown
Open http://localhost:8080 in a browser to access the frontend. Test creating, viewing, updating, and deleting tasks. Verify API endpoints using curl or Postman at http://localhost:8080/api/tasks.
```

---

## Advanced Enhancements (Optional)

### Step 35: Add User Authentication
```markdown
Add Spring Security dependency, create a SecurityConfig class with basic authentication, and modify Task entity to associate tasks with authenticated users.
```

### Step 36: Add File Upload for Tasks
```markdown
Implement file attachment feature for tasks with endpoints to upload and download files. Store file metadata in database and files in a local directory or cloud storage.
```

### Step 37: Add Email Notifications
```markdown
Integrate Spring Mail to send email notifications when tasks are created or completed. Configure SMTP settings in application.properties.
```

### Step 38: Implement Task Categories/Tags
```markdown
Create a Category entity with many-to-many relationship to Task. Add API endpoints to manage categories and filter tasks by category.
```

---

## Tips for Using GitHub Copilot

1. **Be Specific**: Include framework versions, specific libraries, and architectural patterns in your prompts
2. **Iterative Development**: Build one layer at a time (model → repository → service → controller)
3. **Request Best Practices**: Ask for error handling, validation, and proper annotations
4. **Ask for Tests**: Request unit and integration tests alongside production code
5. **Review & Refine**: Always review generated code and refine prompts if needed

---

## Project Structure Reference

```
taskmanager/
├── src/
│   ├── main/
│   │   ├── java/com/example/taskmanager/
│   │   │   ├── TaskManagerApplication.java
│   │   │   ├── controller/
│   │   │   │   └── TaskController.java
│   │   │   ├── service/
│   │   │   │   ├── TaskService.java
│   │   │   │   └── TaskServiceImpl.java
│   │   │   ├── repository/
│   │   │   │   └── TaskRepository.java
│   │   │   ├── model/
│   │   │   │   └── Task.java
│   │   │   ├── dto/
│   │   │   │   ├── TaskDTO.java
│   │   │   │   └── TaskCreateRequest.java
│   │   │   ├── exception/
│   │   │   │   └── GlobalExceptionHandler.java
│   │   │   └── config/
│   │   │       └── WebConfig.java
│   │   └── resources/
│   │       ├── application.properties
│   │       ├── data.sql
│   │       └── static/
│   │           ├── index.html
│   │           ├── task-detail.html
│   │           ├── css/
│   │           │   └── styles.css
│   │           └── js/
│   │               └── app.js
│   └── test/
│       └── java/com/example/taskmanager/
│           ├── service/
│           │   └── TaskServiceImplTest.java
│           ├── controller/
│           │   └── TaskControllerIntegrationTest.java
│           └── repository/
│               └── TaskRepositoryTest.java
├── pom.xml
├── Dockerfile
├── docker-compose.yml
└── README.md
```

---

Use these prompts sequentially with GitHub Copilot to build a complete, production-ready Spring Boot application from scratch!
