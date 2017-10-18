update login
set userId = $1,
    logInCount = $2
where "sid" = $3;
