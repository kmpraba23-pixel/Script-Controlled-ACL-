# READ ACL Configuration

## Project Title
Script-Controlled ACL – Restrict Record Access Based on Field Value

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

## Purpose

The READ ACL controls access to records in the Institution Details table.

Users with the `bb1` role are allowed to access the records according to the configured ACL logic.

## ACL Script

```javascript
(function () {
    // Allow admin users full access
    if (gs.hasRole('admin')) {
        return true;
    }

    // Allow only EEE branch users to see EEE records
    if (gs.hasRole('bb1')){
        return true;
    }

    // Deny access for all others
    return false;
})();
