import { DataSource } from 'typeorm';
import { Role } from '../role/entities/role.entity';
import { Permission } from '../permission/entities/permission.entity';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5460,
  username: 'postgres',
  password: 'softsuave',
  database: 'rbms_db',
  entities: [Role, Permission],
  synchronize: false,
});

async function seed() {
  await AppDataSource.initialize();

  const roleRepo = AppDataSource.getRepository(Role);
  const permissionRepo = AppDataSource.getRepository(Permission);

  const roles = ['admin', 'user'];
  for (const name of roles) {
    const exists = await roleRepo.findOneBy({ name });
    if (!exists) {
      const role = roleRepo.create({ name });
      await roleRepo.save(role);
    }
  }

  const permissions = ['create', 'read', 'update', 'delete'];
  for (const name of permissions) {
    const exists = await permissionRepo.findOneBy({ name });
    if (!exists) {
      const permission = permissionRepo.create({ name });
      await permissionRepo.save(permission);
    }
  }

  console.log('✅ Roles and permissions seeded');
  process.exit();
}

seed().catch((err) => {
  console.error('❌ Error seeding data:', err);
  process.exit(1);
});
