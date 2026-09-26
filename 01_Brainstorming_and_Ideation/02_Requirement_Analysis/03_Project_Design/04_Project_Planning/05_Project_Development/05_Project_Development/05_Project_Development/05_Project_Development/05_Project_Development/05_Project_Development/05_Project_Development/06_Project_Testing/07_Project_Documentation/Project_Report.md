# Project Documentation

## Project Title

Script-Controlled ACL – Restrict Record Access Based on Field Value

## Introduction

This project demonstrates how ServiceNow Access Control Lists (ACLs) can be used to control access to records based on user roles and field values.

## Objective

The main objective is to implement role-based access control for a custom Institution Details table using ServiceNow ACLs.

## Technologies Used

- ServiceNow
- Access Control Lists (ACLs)
- JavaScript
- ServiceNow Users and Roles
- Custom Tables

## User

A project user named `EEE User` was created.

## Roles

The following custom roles were created:

- `bb1` – Read
- `bb2` – Create
- `bb3` – Write
- `bb4` – Delete

## Custom Table

Table Name:

`u_institution_details`

Table Label:

Institution Details

## Fields

- Student Roll Number
- Student Name
- Faculty Name
- Branch
- Email
- Phone Number
- Description

## ACL Implementation

### READ

The READ ACL uses the `bb1` role and the Branch field to control record access.

### CREATE

The CREATE ACL uses the `bb2` role.

### WRITE

The WRITE ACL uses the `bb3` role.

### DELETE

The DELETE ACL uses the `bb4` role.

### Administrator

Admin users are provided full access according to the configured READ ACL script.

## Project Workflow

User → Role → ACL Evaluation → Permission Check → Record Access

## Benefits

- Provides role-based access control.
- Restricts unauthorized operations.
- Demonstrates field-based record access.
- Improves understanding of ServiceNow security.
- Provides separate permissions for different operations.

## Project Outcome

The project demonstrates the implementation of script-controlled ACLs in ServiceNow for READ, CREATE, WRITE, and DELETE operations.

## Conclusion

The project provides practical understanding of ServiceNow access control and demonstrates how roles and ACLs can be combined to manage record-level permissions.
