# Brainstorming and Ideation

## Project Title
Script-Controlled ACL – Restrict Record Access Based on Field Value

## Problem Statement
In an organization, different users should have different levels of access to institutional records. 
Allowing every user to access all records can create security and privacy issues.

## Proposed Solution
The project uses ServiceNow Access Control Lists (ACLs) and scripts to control access to records based on user roles and field values.

## Main Idea
The system provides different permissions for different custom roles:

- bb1 – Read access
- bb2 – Create access
- bb3 – Write access
- bb4 – Delete access

The READ ACL also uses the Branch field to control access to EEE branch records.

## Expected Benefit
The project demonstrates role-based and script-controlled record security in ServiceNow.
