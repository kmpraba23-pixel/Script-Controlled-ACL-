# Roles Creation

## Project Title
Script-Controlled ACL – Restrict Record Access Based on Field Value

## Custom Roles

Four custom roles were created in ServiceNow for controlling access to the Institution Details table.

| Role | Purpose |
|---|---|
| bb1 | READ access |
| bb2 | CREATE access |
| bb3 | WRITE access |
| bb4 | DELETE access |

## Role Assignment

The following roles were assigned to the project user:

- bb1
- bb2
- bb3
- bb4

## Purpose

The custom roles are used by ACLs to control which operations a user can perform on the `u_institution_details` table.

## Result

The required custom roles were created and assigned to the project user.
