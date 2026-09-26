# WRITE ACL Configuration

## Project Title
Script-Controlled ACL – Restrict Record Access Based on Field Value

## ACL Details

| Property | Value |
|---|---|
| Type | Record |
| Operation | Write |
| Name | u_institution_details |
| Active | True |
| Required Role | bb3 |

## Purpose

The WRITE ACL controls who can modify existing records in the Institution Details table.

## Access Logic

Users with the `bb3` role are permitted to modify records in the `u_institution_details` table.

Users without the required role are not permitted to perform the write operation through this ACL.

## Configuration

The ACL was configured with:

- Type: Record
- Operation: Write
- Table: `u_institution_details`
- Required Role: `bb3`

## Result

The WRITE ACL was configured to provide role-based permission for modifying Institution Details records.
