# CREATE ACL Configuration

## Project Title
Script-Controlled ACL – Restrict Record Access Based on Field Value

## ACL Details

| Property | Value |
|---|---|
| Type | Record |
| Operation | Create |
| Name | u_institution_details |
| Active | True |
| Required Role | bb2 |

## Purpose

The CREATE ACL controls who can create new records in the Institution Details table.

## Access Logic

Users with the `bb2` role are permitted to create records in the `u_institution_details` table.

Users without the required role are not permitted to create records through this ACL.

## Configuration

The ACL was configured with:

- Type: Record
- Operation: Create
- Table: `u_institution_details`
- Required Role: `bb2`

## Result

The CREATE ACL was configured to provide role-based permission for creating Institution Details records.
