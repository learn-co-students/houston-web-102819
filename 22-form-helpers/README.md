# Abstracting Forms

### Learning Goals

- Use `form_with` to create a form for a resource
- Use `form.text_input` to create text inputs
- Use `form.collection_select`  to create an input for an association

### Common Errors
- Unpermitted Parameter?
    - Mass Assignment
- AuthenticityToken Invalid?
- Edit Forms (Making Patch Requests)

##### Vocabulary
- Rails Helpers
  - A module of helpful methods for building HTML programmatically
- `form_tag`
  - A (mostly) obsolete rails helper for creating html form tags
- `form_for`
  - A (mostly) obsolete rails helper for creating html forms for an ActiveRecord Model
- `form_with`
  - A new rails helper which can create general html forms with special support for ActiveRecord Models (best of both worlds)