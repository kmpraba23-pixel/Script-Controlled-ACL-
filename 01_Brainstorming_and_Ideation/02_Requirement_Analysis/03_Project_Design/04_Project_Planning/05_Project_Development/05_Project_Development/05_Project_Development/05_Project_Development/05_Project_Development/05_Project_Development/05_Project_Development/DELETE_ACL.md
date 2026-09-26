# DELETE ACL Configuration

## Project Title
Script-Controlled ACL – Restrict Record Access Based on Field Value

## ACL Details

| Property | Value |
|---|---|
| Type | Record |
| Operation | Delete |
| Name | u_institution_details |
| Active | True |
| Required Role | bb4 |

## Purpose

The DELETE ACL controls who can delete records from the Institution Details table.

## Access Logic

Users with the `bb4` role are permitted to delete records from the `u_institution_details` table.

Users without the required role are not permitted to perform the delete operation through this ACL.

## Configuration

The ACL was configured with:

- Type: Record
- Operation: Delete
- Table: `u_institution_details`
- Required Role: `bb4`

## Result

The DELETE ACL was configured to provide role-based permission for deleting Institution Details records.
