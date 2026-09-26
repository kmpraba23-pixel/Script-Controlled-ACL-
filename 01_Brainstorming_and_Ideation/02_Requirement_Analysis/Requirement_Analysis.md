# Requirement Analysis

## Project Title
Script-Controlled ACL – Restrict Record Access Based on Field Value

## Functional Requirements

1. The system should allow creation of a custom Institution Details table.
2. The system should allow creation of users and custom roles.
3. The system should provide role-based access control.
4. Users with role `bb1` should have READ access.
5. Users with role `bb2` should have CREATE access.
6. Users with role `bb3` should have WRITE access.
7. Users with role `bb4` should have DELETE access.
8. The READ ACL should restrict access based on the Branch field.
9. Admin users should have full access.
10. The system should allow testing of different access permissions.

## User Requirements

### User
- User ID: EEE User
- First Name: EEE
- Last Name: User
- Email: eeeuser@gmail.com

### Roles
- bb1 – Read
- bb2 – Create
- bb3 – Write
- bb4 – Delete

## Table Requirements

### Table Name
u_institution_details

### Fields
- Student Roll Number – Auto Number
- Student Name – Reference User
- Faculty Name – Reference User
- Branch – Choice
- Email – String
- Phone Number – String
- Description – Multi String

### Branch Choices
- ECE
- EEE
- CSE

## Security Requirements

The project should use ServiceNow ACLs to control access to records.

The READ ACL should use a script to allow access according to the user's role and the Branch field.

## Non-Functional Requirements

- Access should be controlled securely.
- Different roles should have different permissions.
- The system should be easy to test and demonstrate.
- Unauthorized users should not be able to perform restricted operations.
