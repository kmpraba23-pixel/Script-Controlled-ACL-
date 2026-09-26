# Table Creation

## Project Title
Script-Controlled ACL – Restrict Record Access Based on Field Value

## Custom Table

A custom table was created in ServiceNow.

### Table Name
`u_institution_details`

### Table Label
Institution Details

## Table Fields

| Field | Type |
|---|---|
| Student Roll Number | Auto Number |
| Student Name | Reference User |
| Faculty Name | Reference User |
| Branch | Choice |
| Email | String |
| Phone Number | String |
| Description | Multi String |

## Branch Choices

The Branch field contains the following choices:

- ECE
- EEE
- CSE

## Purpose

The custom table stores institution and student-related information and is used to demonstrate ACL-based access control.

## Records

Multiple records were created with different Branch values to test the access restrictions.

## Result

The `u_institution_details` table and its required fields were created successfully.
