﻿CREATE DATABASE TEST

USE TEST;
GO

CREATE TABLE R_CURRENCY
(
    ID INT IDENTITY NOT NULL
PRIMARY KEY,
    TITLE VARCHAR(60) NOT NULL,
    CODE VARCHAR(3) NOT NULL,
    VALUE NUMERIC(18, 2) NOT NULL,
    A_DATE DATE NOT NULL

)

ALTER PROCEDURE[dbo].[sp_GetRates]
@date Date,
@code varchar(3)
AS
BEGIN
SELECT ID, TITLE, CODE, VALUE, A_DATE
FROM R_CURRENCY
WHERE A_DATE = @date and CODE = @code
END;