document.addEventListener("DOMContentLoaded", () => {
  const evalBtn = document.getElementById("eval-btn");
  const roleSelect = document.getElementById("role-select");
  const actionSelect = document.getElementById("action-select");
  const logBody = document.getElementById("log-body");

  evalBtn.addEventListener("click", () => {
    const role = roleSelect.value;
    const action = actionSelect.value;

    let allowed = false;
    let reason = "";

    // Script-Controlled ACL Logic
    if (role === "admin") {
      allowed = true;
      reason = "Admin has full unrestricted permissions.";
    } else if (role === "developer") {
      if (action === "delete") {
        allowed = false;
        reason = "Developers are restricted from deleting assets.";
      } else {
        allowed = true;
        reason = "Action permitted for developer role.";
      }
    } else if (role === "guest") {
      if (action === "read") {
        allowed = true;
        reason = "Guest read-only access granted.";
      } else {
        allowed = false;
        reason = "Guests are limited to read operations only.";
      }
    }

    // Insert output row in evaluation table
    const row = document.createElement("tr");
    row.innerHTML = `
      <td style="text-transform: capitalize;">${role}</td>
      <td style="text-transform: capitalize;">${action}</td>
      <td>
        <span class="badge ${allowed ? 'badge-allowed' : 'badge-denied'}">
          ${allowed ? 'ALLOWED' : 'DENIED'}
        </span>
      </td>
      <td>${reason}</td>
    `;

    logBody.prepend(row);
  });
});
