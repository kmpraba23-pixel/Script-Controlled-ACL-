# Requirement Analysis

## Project Title

Script-Controlled ACL – Restrict Record Access Based on Field Value

## Functional Requirements

The system should allow:

1. Creation of a dedicated ServiceNow user.
2. Creation of custom roles.
3. Assignment of roles to the user.
4. Creation of a custom Institution Details table.
5. Creation of required fields in the table.
6. Creation of records with different branch values.
7. Configuration of READ ACL.
8. Configuration of CREATE ACL.
9. Configuration of WRITE ACL.
10. Configuration of DELETE ACL.
11. Role-based access control.
12. Administrator full access.

## User Requirement

A user named:

- User ID: EEE User
- First Name: EEE
- Last Name: User
- Email: eeeuser@gmail.com

## Required Roles

- bb1
- bb2
- bb3
- bb4

## Required Table

Table Name:

u_institution_details

Table Label:

Institution Details

## Required Fields

- Student Roll Number
- Student Name
- Faculty Name
- Branch
- Email
- Phone Number
- Description

## Branch Choices

- ECE
- EEE
- CSE

## Access Requirements

| Role | Permission |
|------|------------|
| bb1 | Read |
| bb2 | Create |
| bb3 | Write |
| bb4 | Delete |
| admin | Full Access |
