# Sample Prompts for Software Testing

Use these prompts with an open source file, selected function, or relevant test file. Replace bracketed placeholders with details from your project.

## Create a Simple Test
```markdown
Write a unit test for the selected function using the test framework already used in this project. Include one successful case and one failure case.
```
```markdown
Create a simple test that verifies `[function name]` returns the expected result for a valid input. Follow the naming and assertion style of nearby tests.
```
```markdown
Add a test for the smallest observable behavior in this file. Keep the test focused and explain what behavior it verifies.
```

## Generate a Complete Test in One Shot
```markdown
Create a complete unit test file for `[source file]`. Use the project's existing test framework and conventions. Cover the happy path, invalid input, boundary values, and expected errors. Mock only external dependencies.
```
```markdown
Generate runnable tests for this class in one response. Include setup, test data, mocks, assertions, and cleanup where needed. Do not change the production code.
```
```markdown
Write a table-driven or parameterized test suite for the selected function. Include representative normal, boundary, empty, null, and malformed inputs where applicable.
```

## Generate Tests from Comments
Add a behavior comment such as the following above a function or in a test file:

```text
// Returns the discounted price.
// A percentage of 0 leaves the price unchanged.
// A percentage of 100 returns 0.
// Negative prices or percentages outside 0-100 throw an error.
```

Then use one of these prompts:

```markdown
Generate unit tests from the behavior described in these comments. Create one clearly named test for each rule and use the project's existing test framework.
```
```markdown
Treat each comment as an acceptance criterion. Generate tests that prove every criterion, including the stated error conditions.
```
```markdown
Compare the comments with the current tests. Add tests for any documented behavior that is not covered, without duplicating existing cases.
```

## Generate Tests from a Basic Function
```markdown
Analyze the selected function and generate unit tests for each branch and return path. Include boundary and invalid-input cases that follow from the implementation.
```
```markdown
Create tests for this function without changing it. First list its observable behaviors, then generate a focused test for each behavior.
```
```markdown
Generate parameterized tests for this function. Choose inputs that exercise equivalence classes and boundary values, and briefly label why each case matters.
```
```markdown
Identify hidden assumptions in this function, then write tests that would fail if those assumptions are violated.
```

## Improve Test Coverage
```markdown
Review this source file and its existing tests. Identify untested branches, error paths, and boundary conditions, then add the smallest set of tests needed to cover them. Avoid tests that only repeat existing behavior.
```
```markdown
Use the current test coverage report to find meaningful gaps in `[file or module]`. Prioritize user-visible behavior and regression risk over reaching a percentage target, then generate the missing tests.
```
```markdown
Suggest five high-value tests that would improve confidence in this module. Rank them by risk addressed, explain the expected coverage gain, and implement the top three.
```
```markdown
Find code paths in the selected function that the current tests cannot reach. Generate targeted tests for reachable gaps and flag any unreachable or dead code separately.
```

## Identify What Needs to Be Tested
```markdown
Analyze this component and identify its highest-risk behaviors, dependencies, inputs, state changes, and failure modes. Produce a prioritized test checklist with unit, integration, and end-to-end recommendations.
```
```markdown
Review the files changed in this branch. Identify which components need new or updated tests, explain the regression risk, and recommend the appropriate test level for each one.
```
```markdown
Map the public methods in this class to their key test scenarios. Highlight business-critical paths, edge cases, external integrations, and behaviors that should not be mocked.
```
```markdown
Act as a test reviewer. Find important behaviors that are difficult to observe or test in this design, and suggest small design improvements that would improve testability.
```

## Review and Strengthen Existing Tests
```markdown
Review these tests for weak assertions, missing edge cases, excessive mocking, shared state, and flaky behavior. Recommend focused improvements and update only the tests that need changes.
```
```markdown
Check whether these tests verify behavior rather than implementation details. Refactor brittle tests while preserving their intent.
```
```markdown
Look for tests that can pass for the wrong reason. Strengthen their setup and assertions so each test fails when the behavior it names is broken.
```

---
Use these prompts to demonstrate how GitHub Copilot can move from quick test generation to risk-based test planning and coverage improvement.
