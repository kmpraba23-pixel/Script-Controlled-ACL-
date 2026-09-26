# Project Design

## Project Title
Script-Controlled ACL – Restrict Record Access Based on Field Value

## System Design

The project is designed using ServiceNow ACLs, users, roles, a custom table, and a script-controlled READ ACL.

## Main Components

### 1. User
A user named `EEE User` is created in the ServiceNow system.

### 2. Custom Roles
Four custom roles are created:

| Role | Permission |
|------|------------|
| bb1 | Read |
| bb2 | Create |
| bb3 | Write |
| bb4 | Delete |

### 3. Custom Table

Table name:

`u_institution_details`

The table stores institution and student-related information.

### 4. Table Fields

| Field | Type |
|------|------|
| Student Roll Number | Auto Number |
| Student Name | Reference User |
| Faculty Name | Reference User |
| Branch | Choice |
| Email | String |
| Phone Number | String |
| Description | Multi String |

### 5. Branch Values

The Branch field contains:

- ECE
- EEE
- CSE

## ACL Design

The project contains four main ACL operations:

### READ ACL
- Operation: Read
- Role: bb1
- Branch condition: EEE
- Advanced script: Used to control access

### CREATE ACL
- Operation: Create
- Role: bb2

### WRITE ACL
- Operation: Write
- Role: bb3

### DELETE ACL
- Operation: Delete
- Role: bb4

## Access Control Flow

User  
↓  
Role Verification  
↓  
ACL Evaluation  
↓  
Operation Check  
↓  
Record Access Granted or Denied

## Expected Access Model

bb1 → Read EEE records

bb2 → Create records

bb3 → Modify records

bb4 → Delete records

Admin → Full access
