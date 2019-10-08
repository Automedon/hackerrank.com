/*
NOTE - Branch reset group is supported by Perl, PHP, Delphi and R.

A branch reset group consists of alternations and capturing groups. (?|(regex1)|(regex2))
Alternatives in branch reset group share same capturing group.

ach20.png

Task

You have a test string .
Your task is to write a regex which will match , with following condition(s):

 consists of 8 digits.
 must have "---", "-", "." or ":" separator such that string  gets divided in  parts, with each part having exactly two digits.
 string must have exactly one kind of separator.
Separators must have integers on both sides.
Valid 

12-34-56-78
12:34:56:78
12---34---56---78
12.34.56.78
Invalid 

1-234-56-78
12-45.78:10
Note

This is a regex only challenge. You are not required to write any code.
You only have to fill the regex pattern in the blank (_________).
*/
$Regex_Pattern = '/^\d\d(?|(:)|(---)|(\.)|(-))\d\d\1\d\d\1\d\d$/';
