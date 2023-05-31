import { Router } from 'express';
import * as userController from '../../controllers/users/user.controller';
import { isAdmin } from '../../middlewares/auth/isAdmin';
import { authMiddleware } from '../../middlewares/auth/authMiddleware';
const router = Router();
// get
router.get('/login', userController.login); //done
router.get('/logout', userController.logout); //done
router.get('/', authMiddleware, userController.getUsers); //done
router.get('/:id', authMiddleware, userController.getUserById); // done
router.get('/refresh', userController.handleRefreshToken);
//router.get('/verify-email', userController.verifyEmail);

// post
router.post('/registers', userController.register); // done
router.post('/reset-password', userController.resetPassword);
// put
router.put('/:id/change-password', userController.changePassword); // done
router.put('forgot-password-token', userController.resetPassword);
router.put('/:id', userController.updateUser); // done
router.put('/:id/activate', authMiddleware, isAdmin, userController.unblockUser); // done
router.put('/:id/deactivate', authMiddleware, isAdmin, userController.blockUser); // done
// delete
router.delete('/:id', isAdmin, userController.deleteUser);

// customer

//router.get('/customer', userController.getCustomerById);

module.exports = router;
