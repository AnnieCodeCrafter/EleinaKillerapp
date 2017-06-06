using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Data;

namespace Eleina.Login
{
    public class Login
    {
     private string connectionString = "Data Source=mssql.fhict.local;Initial Catalog=dbi364679;User ID=dbi364679;Password=Thorax1998";

        private int ID;


        public void addUser(string username, string password)
        {
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                //change user in actual database; prolly a 'protected' keyword
                conn.Open();
                string query = "INSERT INTO ElUser VALUES (@username, @password)";
                using (SqlCommand cmd = new SqlCommand(query, conn))
                {


                    cmd.CommandType = CommandType.Text;
                    cmd.Parameters.AddWithValue("@username", username);
                    cmd.Parameters.AddWithValue("@password", password);

                    cmd.ExecuteNonQuery();



                }

            }
        }

        //public int loginUser(string username, string password)
        //{


        //    using (SqlConnection conn = new SqlConnection(connectionString))
        //    {
        //        conn.Open();
        //        string query = $"SELECT * FROM ElUser WHERE username = @username AND password = @password";
        //        using (SqlCommand cmd = new SqlCommand(query, conn))
        //        {

        //            cmd.Parameters.AddWithValue("@username", username);
        //            cmd.Parameters.AddWithValue("@password", password);
             
        //            SqlDataAdapter adapt = new SqlDataAdapter(cmd);
        //            DataSet ds = new DataSet();
        //            adapt.Fill(ds);
        //            int count = ds.Tables[0].Rows.Count;

        //            using (SqlDataReader reader = cmd.ExecuteReader())
        //            {
        //                while (reader.Read())
        //                {

        //                   ID = ((int)reader["ID"]);
        //                }
        //            }


        //            conn.Close();

        //            if (count == 1)
        //            {
        //                return ID;
        //            }

        //            else
        //            {
        //                return 0;
        //            }

                    
        //        }

        //    }

        //}

      
        
    }
    
}
