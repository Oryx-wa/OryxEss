﻿using OryxMCI.Entities;
using System;
using System.Linq;
using System.Linq.Expressions;

namespace OryxMCI.Data.Repositories
{
    public interface IEntityBaseRepository<T> where T : class, IEntityBase, new()
    {
        IQueryable<T> AllIncluding(params Expression<Func<T, object>>[] includeProperties);
        IQueryable<T> All { get; }
        IQueryable<T> GetAll();        
        T GetSingle(int id);
        IQueryable<T> FindBy(Expression<Func<T, bool>> predicate);
        IQueryable<T> GetChild(int id);

        IQueryable<T> Search(string searchString, int pageNo = 1, int pageSize = 20, string orderBy = "CreateDate");

        IQueryable<T> Search(string searchString);

        IQueryable<T> GetPaged(int pageNo = 1, int pageSize = 20, string orderBy="CreateDate");

        int Count();
        void Add(T entity);
        void Delete(T entity);
        void Edit(T entity);
    }
}
