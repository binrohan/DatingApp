using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp.API.Models;

namespace DatingApp.API.Data
{
    public interface IAdminRepository
    {
        Task<IEnumerable<User>> GetUserWithRoles();

    }
}