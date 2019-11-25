# Rails

RESTful Routes

- HTTP VERB + Path -> Action

- **index** GET /receipts -> shows a list of receipts
- **show** GET /receipts/:id -> shows a specific receipt
- **new** GET /receipts/new -> shows a receipt form
- **create** POST /receipts -> Actually creates the receipt (usually redirects the user somewhere else)
- **edit** GET /receipts/:id/edit -> shows a receipt edit form
- **update** PATCH /receipts/:id -> Actually updates the receipt (usually redirects the user somewhere else)
- **destroy** DELETE /receipts/:id -> Actually deletes the receipt (usually redirects the user somewhere else)