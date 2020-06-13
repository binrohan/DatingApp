using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class AdminRepository //: IAdminRepository
    {
        private readonly DataContext  _context;
        public AdminRepository (DataContext context)
        {
             _context = context;

        }

        // public async IEnumerable<User> GetUserWithRoles()
        // {
        //     var userList = await _context.Users
        //         .OrderBy(x => x.UserName)
        //         .Select(user => new 
        //         {
        //             Id = user.Id,
        //             UseName = user.UserName,
        //             Roles = (from userRole in user.UserRoles
        //                         join role in _context.Roles
        //                         on userRole.RoleId
        //                         equals role.Id
        //                         select role.Name)
        //         }).ToListAsync();
        //     return Ok(userList);
        // }
    }
}