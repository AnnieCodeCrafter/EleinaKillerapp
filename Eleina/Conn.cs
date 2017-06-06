using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;

namespace Eleina
{
   
    public class Conn : ConInterface
    {
      public SqlConnection databaseConnection;
      public void Connect()
      {
        databaseConnection = new SqlConnection("Server=192.168.20.46;Database=participation;User Id=root;Password=Wachtwoord2;");
        try
        {
          databaseConnection.Open();
        }
        catch (Exception)
        {
          throw;
        }
      }
      public void disConnect()
      {
        databaseConnection.Close();
      }

      public SqlConnection getConnection()
      {
        return databaseConnection;
      }
    }
}

