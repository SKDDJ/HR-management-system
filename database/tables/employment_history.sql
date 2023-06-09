DROP TABLE IF EXISTS employment_history;

CREATE TABLE employment_history (
  staff_id INTEGER,
  start_date DATE,
  end_date DATE,
  employment_id VARCHAR(10),
  section_id INTEGER
);


INSERT INTO
  employment_history (
    staff_id,
    start_date,
    end_date,
    employment_id,
    section_id
  )
VALUES
  (
    102,
    to_date('13-01-1993', 'dd-mm-yyyy'),
    to_date('24-07-1998', 'dd-mm-yyyy'),
    'IT_PROG',
    60
  );

INSERT INTO
  employment_history (
    staff_id,
    start_date,
    end_date,
    employment_id,
    section_id
  )
VALUES
  (
    101,
    to_date('21-09-1989', 'dd-mm-yyyy'),
    to_date('27-10-1993', 'dd-mm-yyyy'),
    'AC_ACCOUNT',
    110
  );

INSERT INTO
  employment_history (
    staff_id,
    start_date,
    end_date,
    employment_id,
    section_id
  )
VALUES
  (
    101,
    to_date('28-10-1993', 'dd-mm-yyyy'),
    to_date('15-03-1997', 'dd-mm-yyyy'),
    'AC_MGR',
    110
  );

INSERT INTO
  employment_history (
    staff_id,
    start_date,
    end_date,
    employment_id,
    section_id
  )
VALUES
  (
    201,
    to_date('17-02-1996', 'dd-mm-yyyy'),
    to_date('19-12-1999', 'dd-mm-yyyy'),
    'MK_REP',
    20
  );

INSERT INTO
  employment_history (
    staff_id,
    start_date,
    end_date,
    employment_id,
    section_id
  )
VALUES
  (
    114,
    to_date('24-03-1998', 'dd-mm-yyyy'),
    to_date('31-12-1999', 'dd-mm-yyyy'),
    'ST_CLERK',
    50
  );

INSERT INTO
  employment_history (
    staff_id,
    start_date,
    end_date,
    employment_id,
    section_id
  )
VALUES
  (
    122,
    to_date('01-01-1999', 'dd-mm-yyyy'),
    to_date('31-12-1999', 'dd-mm-yyyy'),
    'ST_CLERK',
    50
  );

INSERT INTO
  employment_history (
    staff_id,
    start_date,
    end_date,
    employment_id,
    section_id
  )
VALUES
  (
    200,
    to_date('17-09-1987', 'dd-mm-yyyy'),
    to_date('17-06-1993', 'dd-mm-yyyy'),
    'AD_ASST',
    90
  );

INSERT INTO
  employment_history (
    staff_id,
    start_date,
    end_date,
    employment_id,
    section_id
  )
VALUES
  (
    176,
    to_date('24-03-1998', 'dd-mm-yyyy'),
    to_date('31-12-1999', 'dd-mm-yyyy'),
    'SA_REP',
    80
  );

INSERT INTO
  employment_history (
    staff_id,
    start_date,
    end_date,
    employment_id,
    section_id
  )
VALUES
  (
    176,
    to_date('01-01-1999', 'dd-mm-yyyy'),
    to_date('31-12-1999', 'dd-mm-yyyy'),
    'SA_MAN',
    80
  );

INSERT INTO
  employment_history (
    staff_id,
    start_date,
    end_date,
    employment_id,
    section_id
  )
VALUES
  (
    200,
    to_date('01-07-1994', 'dd-mm-yyyy'),
    to_date('31-12-1998', 'dd-mm-yyyy'),
    'AC_ACCOUNT',
    90
  );