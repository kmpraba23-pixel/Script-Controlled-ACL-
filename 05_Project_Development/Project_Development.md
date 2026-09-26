# Project Development

## Project Title

Script-Controlled ACL – Restrict Record Access Based on Field Value

---

# 1. User Creation

## User Details

Create the following user in ServiceNow:

| Field | Value |
|---|---|
| User ID | EEE User |
| First Name | EEE |
| Last Name | User |
| Email | eeeuser@gmail.com |

## Purpose

The EEE User account is created for testing role-based access to the Institution Details table.

---

# 2. Role Creation

## Custom Roles

Create the following custom roles:

- bb1
- bb2
- bb3
- bb4

## Role Assignment

Assign all four custom roles to the EEE User:

- bb1
- bb2
- bb3
- bb4

## Role Purpose

| Role | Purpose |
|---|---|
| bb1 | Read |
| bb2 | Create |
| bb3 | Write |
| bb4 | Delete |

---

# 3. Table Creation

## Custom Table

| Property | Value |
|---|---|
| Table Label | Institution Details |
| Table Name | u_institution_details |

## Table Fields

| Field | Type |
|---|---|
| Student Roll Number | Auto Number |
| Student Name | Reference – User |
| Faculty Name | Reference – User |
| Branch | Choice |
| Email | String |
| Phone Number | String |
| Description | Multi String |

## Branch Choices

The Branch field contains:

- ECE
- EEE
- CSE

## Records

Multiple records are created with different branch values for testing the ACL restrictions.

---

# 4. READ ACL

## ACL Details

| Property | Value |
|---|---|
| Type | Record |
| Operation | Read |
| Name | u_institution_details |
| Active | True |
| Advanced | True |
| Required Role | bb1 |
| Data Condition | Branch is EEE |

## READ ACL Script

```javascript
(function () {
    // Allow admin users full access
    if (gs.hasRole('admin')) {
        return true;
    }

    // Allow only EEE branch users to see EEE records
    if (gs.hasRole('bb1')) {
        return true;
    }

    // Deny access for all others
    return false;
})();
