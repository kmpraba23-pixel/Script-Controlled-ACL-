# Project Testing

## Project Title
Script-Controlled ACL – Restrict Record Access Based on Field Value

## Testing Objective

The project was tested to verify that the configured ACLs provide the required access based on user roles.

## Test Cases

| Test Case | Role | Operation | Expected Result |
|---|---|---|---|
| TC01 | bb1 | Read | Read access |
| TC02 | bb2 | Create | Create access |
| TC03 | bb3 | Write | Write access |
| TC04 | bb4 | Delete | Delete access |
| TC05 | No required role | Restricted operation | Access denied |
| TC06 | admin | All operations | Full access |

## READ ACL Testing

The READ ACL was tested using the `bb1` role and the configured Branch condition.

The access behavior was checked against the records in the `u_institution_details` table.

## CREATE ACL Testing

The CREATE ACL was tested using the `bb2` role to verify permission to create records.

## WRITE ACL Testing

The WRITE ACL was tested using the `bb3` role to verify permission to modify existing records.

## DELETE ACL Testing

The DELETE ACL was tested using the `bb4` role to verify permission to delete records.

## Admin Testing

Admin access was checked to verify that administrative users have the required access to the records.

## Test Evidence

Screenshots of the ServiceNow configuration and testing results can be added to this folder as supporting evidence.

## Conclusion

The testing phase verifies the role-based ACL configuration and the access control behavior of the project.
